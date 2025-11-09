import { motion } from 'framer-motion';

interface WorkCardProps {
  title: string;
  description: string;
  client: string;
  tags: string[];
  coverImage: string;
  slug: string;
  base?: string;
}

export default function WorkCard({ title, description, client, tags, coverImage, slug, base = '' }: WorkCardProps) {
  return (
    <motion.a
      href={`${base}work/${slug}`}
      className="group rounded-2xl overflow-hidden bg-white shadow-xs hover:shadow-xl transition-all duration-300 h-full flex flex-col"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <div className="aspect-16/10 overflow-hidden bg-gray-100 shrink-0">
        <img
          src={coverImage}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="text-sm text-primary font-medium mb-2">{client}</div>
        <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 content-end">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full h-8"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.a>
  );
}
