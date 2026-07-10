import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { Button } from './ui/Button';
import { useContactForm } from '../hooks/useContactForm';
import { useLanguage } from '../context/LanguageContext';

const INPUT_CLASSES =
  'w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:focus:border-blue-400';

export const ContactComponent = () => {
  const { status, handleSubmit } = useContactForm();
  const { t } = useLanguage();

  return (
    <motion.section
      id="contact"
      className="py-24 px-6 bg-gray-50 dark:bg-gray-800/50"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="mx-auto max-w-2xl">
        <SectionHeading title={t.contact.title} subtitle={t.contact.subtitle} />

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                {t.contact.nameLabel}
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder={t.contact.namePlaceholder}
                required
                className={INPUT_CLASSES}
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
                {t.contact.emailLabel}
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder={t.contact.emailPlaceholder}
                required
                className={INPUT_CLASSES}
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">
              {t.contact.messageLabel}
            </label>
            <textarea
              id="message"
              name="message"
              placeholder={t.contact.messagePlaceholder}
              required
              rows={5}
              className={INPUT_CLASSES}
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? t.contact.submitting : t.contact.submit}
          </Button>
        </form>

        {status === 'success' && (
          <p className="mt-4 text-sm text-green-600 dark:text-green-400">{t.contact.success}</p>
        )}
        {status === 'error' && (
          <p className="mt-4 text-sm text-red-600 dark:text-red-400">{t.contact.error}</p>
        )}
      </div>
    </motion.section>
  );
};
