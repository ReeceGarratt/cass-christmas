import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

interface GlassImageProps {
    src: string;
    srcset?: string;
    alt: string;
    classNames?: string;
    sizes?: string;
    maxTilt?: number;
}

export default function GlassImage(props: GlassImageProps) {
    const {
        src,
        srcset,
        alt,
        classNames = '',
        sizes = '100vw',
        maxTilt = 5
    } = props;

    const ref = useRef<HTMLDivElement>(null);
    const [isHover, setIsHover] = useState(false);
    // Motion values for rotation
    const rotateX = useMotionValue(0);
    const rotateY = useMotionValue(0);
    // Spring for smoothness
    const springX = useSpring(rotateX, { stiffness: 150, damping: 7 });
    const springY = useSpring(rotateY, { stiffness: 150, damping: 7 });

    // Mouse move handler
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        // Centered coordinates
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        // Range: -1 to 1
        const dx = (x - centerX) / centerX;
        const dy = (y - centerY) / centerY;

        rotateY.set(dx * maxTilt);
        rotateX.set(-dy * maxTilt);
    };

    // Reflection effect: more opacity when tilting towards top-right
    // We'll use the spring values to derive the overlay opacity
    // Top-right = negative rotateX (tilt up) and positive rotateY (tilt right)
    const reflectionOpacity = useTransform(
        [springX, springY],
        ([x, y]) => {
            // Ensure x and y are numbers (framer-motion may pass unknown)
            const numX = typeof x === 'number' ? x : Number(x);
            const numY = typeof y === 'number' ? y : Number(y);
            // Range: 0 (no reflection) to 0.25 (max reflection)
            const up = Math.max(0, numX/8); // 0 to 1
            const left = Math.max(0, -numY/8); // 0 to 1
            return 0.3 * Math.min(1, up + left); // base + boost
        }
    );

    const handleMouseLeave = () => {
        setIsHover(false);
        rotateX.set(0);
        rotateY.set(0);
    };

    const handleMouseEnter = () => {
        setIsHover(true);
    };

    return (
        <motion.div
            ref={ref}
            style={{
                perspective: 800,
                display: 'inline-block',
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
        >
            <motion.img
                src={src}
                srcSet={srcset}
                alt={alt}
                sizes={sizes}
                className={classNames}
                style={{
                    rotateX: springX,
                    rotateY: springY,
                    transition: 'box-shadow 0.2s',
                    boxShadow: isHover
                        ? '0 8px 32px 0 rgba(31, 38, 135, 0.15)'
                        : '0 4px 16px 0 rgba(31, 38, 135, 0.08)',
                    willChange: 'transform',
                    borderRadius: '1rem',
                    background: 'rgba(255,255,255,0.1)',
                    backdropFilter: 'blur(4px)',
                    display: 'block',
                    width: '100%',
                    height: 'auto',
                }}
                draggable={false}
            />
            {/* Reflection overlay */}
            <motion.div
                style={{
                    rotateX: springX,
                    rotateY: springY,
                    pointerEvents: 'none',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    borderRadius: '1rem',
                    background: 'linear-gradient(-45deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.2) 80%, rgba(255,255,255,0) 100%)',
                    opacity: reflectionOpacity,
                    transition: 'opacity 0.2s',
                    zIndex: 2,
                }}
                aria-hidden="true"
            />
        </motion.div>
    );
}