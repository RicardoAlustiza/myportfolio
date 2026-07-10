import { useState } from 'react';
import type { ContactFormData, ContactFormStatus } from '../types';
import { supabase } from '../lib/supabase';

export interface UseContactFormReturn {
  status: ContactFormStatus;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  reset: () => void;
}

export const useContactForm = (): UseContactFormReturn => {
  const [status, setStatus] = useState<ContactFormStatus>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data: ContactFormData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    };

    const { error } = await supabase.functions.invoke('send-contact', {
      body: data,
    });

    if (error) {
      setStatus('error');
    } else {
      setStatus('success');
      form.reset();
    }
  };

  const reset = (): void => setStatus('idle');

  return { status, handleSubmit, reset };
};
