import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabase';

export const ContactComponent = () => {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

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

  return (
    <motion.section id="contact" className="py-20 px-6 bg-gray-800 text-white"
      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
    >
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Contacto</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input type="text" name="name" placeholder="Tu nombre" required className="p-2 border rounded text-white" />
          <input type="email" name="email" placeholder="Tu correo" required className="p-2 border rounded text-white" />
          <textarea name="message" placeholder="Tu mensaje" required className="p-2 border rounded h-32 text-white" />
          <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 cursor-pointer">
            Enviar
          </button>
        </form>
        {status === 'success' && <p className="text-green-500 mt-2">Mensaje enviado con éxito ✅</p>}
        {status === 'error' && <p className="text-red-500 mt-2">Ocurrió un error. Inténtalo más tarde ❌</p>}
      </div>
    </motion.section>
  );
};
