'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (errors[name as keyof typeof errors]) {
      setErrors({ ...errors, [name]: false });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const newErrors = {
      name: !formData.name.trim(),
      email: !formData.email.trim(),
      subject: !formData.subject.trim(),
      message: !formData.message.trim(),
    };

    if (Object.values(newErrors).some((error) => error)) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    const subjectEncoded = encodeURIComponent(formData.subject);
    const bodyEncoded = encodeURIComponent(
      `Hi Mihir,\n\nMy name is ${formData.name}.\nEmail: ${formData.email}\n\n${formData.message}`
    );

    window.location.href = `mailto:mihirzalavadiya1@gmail.com?subject=${subjectEncoded}&body=${bodyEncoded}`;

    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="contact"
      className="relative py-24 bg-zinc-50 dark:bg-black overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Floating Icons (Optional - Keep for decoration) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          y: [0, -30, 0],
          rotate: [0, 10, 0],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-10 right-10 md:top-20 md:right-20 text-[10rem] md:text-[15rem] font-black font-mono text-primary select-none pointer-events-none z-0 leading-none"
      >
        @
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          y: [0, 40, 0],
          x: [0, 20, 0],
          rotate: [0, -10, 0],
          opacity: [0.05, 0.1, 0.05],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute bottom-20 -left-10 md:bottom-40 md:left-10 text-zinc-500 dark:text-zinc-800 select-none pointer-events-none z-0"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-[10rem] h-[10rem] md:w-[18rem] md:h-[18rem]"
        >
          <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
        </svg>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="inline-block text-sm font-bold font-sans uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-md mb-4">
            Get in Touch
          </h2>
          <h3 className="text-3xl md:text-5xl font-outfit font-bold text-zinc-900 dark:text-zinc-100">
            Let&apos;s Work Together
          </h3>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl mx-auto">
            Have a project in mind or want to discuss modern web technologies?
            Send me a message and I&apos;ll get back to you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
          {/* LEFT SIDE: Contact Info Card (Experience Style) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            {/* 👇 Card Container (Copied styles from Experience) */}
            <div className="relative h-full p-8 rounded-3xl bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 shadow-xl hover:shadow-2xl transition-shadow duration-300 group">
              {/* 👇 Decorative Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {/* Content (Z-10 to stay above gradient) */}
              <div className="relative z-10 space-y-8">
                {/* Email Block */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold font-outfit text-zinc-900 dark:text-white mb-1">
                      Email Me
                    </h4>
                    <a
                      href="mailto:mihirzalavadiya1@gmail.com"
                      className="text-zinc-600 dark:text-zinc-400 hover:text-primary transition-colors break-all"
                    >
                      mihirzalavadiya1@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location Block */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold font-outfit text-zinc-900 dark:text-white mb-1">
                      Location
                    </h4>
                    <p className="text-zinc-600 dark:text-zinc-400">
                      Bangalore, India
                    </p>
                  </div>
                </div>

                <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800">
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                      Available for freelance projects
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Form Card (Experience Style) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            {/* 👇 Card Container (Copied styles from Experience) */}
            <div className="relative h-full p-8 md:p-10 rounded-3xl bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm border border-zinc-200 dark:border-zinc-800 shadow-xl hover:shadow-2xl transition-shadow duration-300 group">
              {/* 👇 Decorative Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-bl from-primary/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {/* Content (Z-10) */}
              <form onSubmit={handleSubmit} className="relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-950/50 border ${
                        errors.name
                          ? 'border-red-500'
                          : 'border-zinc-200 dark:border-zinc-700'
                      } focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all`}
                    />
                    {errors.name && (
                      <span className="text-xs text-red-500 mt-1">
                        Name is required
                      </span>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-950/50 border ${
                        errors.email
                          ? 'border-red-500'
                          : 'border-zinc-200 dark:border-zinc-700'
                      } focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all`}
                    />
                    {errors.email && (
                      <span className="text-xs text-red-500 mt-1">
                        Email is required
                      </span>
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Discussion"
                    className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-950/50 border ${
                      errors.subject
                        ? 'border-red-500'
                        : 'border-zinc-200 dark:border-zinc-700'
                    } focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all`}
                  />
                  {errors.subject && (
                    <span className="text-xs text-red-500 mt-1">
                      Subject is required
                    </span>
                  )}
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-950/50 border ${
                      errors.message
                        ? 'border-red-500'
                        : 'border-zinc-200 dark:border-zinc-700'
                    } focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none`}
                  ></textarea>
                  {errors.message && (
                    <span className="text-xs text-red-500 mt-1">
                      Message is required
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  <span>Send Message</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
