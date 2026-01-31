"use client"
import Image from 'next/image';
import React from 'react';
import formImage from '@/public/contactus-form-image.jpeg';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
const ContactForm = () => {
  const validationSchema = yup.object().shape({
    firstname: yup.string().required('Enter your first name'),
    lastname: yup.string().required('Enter your last name'),
    email: yup
      .string()
      .email('Enter a valid email address')
      .required('Email is required'),
    phone: yup
      .string()
      .min(7, 'Phone number is too short')
      .max(15, 'Phone number is too long')
      .required('Phone number is required'),
    subject: yup.string().required('Enter your subject'),
    message: yup.string().required('Message is required'),
    contactMethod: yup.string().required('Select a contact method'),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) });
  const submitForm = (data: any) => {
    console.log(data);
  };
  return (
    <section className="min-h-screen flex justify-center items-start px-3 lg:p-20 my-6 gap-10">
      <div className=" w-full lg:w-1/2 p-5">
        <h3 className="text-3xl font-semibold mb-2">Get in Touch with Us</h3>
        <p className="text-lg">
          We’d love to hear from you! Whether you have questions, need a
          consultation, or want to discuss your next big project, our team is
          ready to help.
        </p>
        <form action="" className="mt-6 flex flex-col space-y-8" onSubmit={handleSubmit(submitForm)}>
          <div className=" flex flex-col md:flex-row space-x-6 space-y-4">
            <div className=" flex flex-col space-y-2 flex-1">
              <label htmlFor="firstName" className="text-brandGray">
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="Enter your first name"
                className="w-full border border-brandGray p-2 rounded-lg outline-none"
                {...register('firstname')}
              />
              {errors.firstname && (
                <p className="text-sm text-red-500">
                  {errors.firstname.message}
                </p>
              )}
            </div>
            <div className="flex flex-col space-y-2 flex-1">
              <label htmlFor="lastName" className="text-brandGray">
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="Enter your last name"
                className="w-full border border-brandGray p-2 rounded-lg outline-none"
                {...register('lastname')}
              />
              {errors.lastname && (
                <p className="text-sm text-red-500">
                  {errors.lastname.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col md:flex-row space-x-6 space-y-4">
            <div className="flex flex-col space-y-2 flex-1">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full border border-brandGray p-2 rounded-lg outline-none"
                {...register('email')}
              />
              {errors.email && (
                <p className="text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="flex flex-col space-y-2 flex-1">
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                type="tel"
                placeholder="phone number"
                className="w-full border border-brandGray p-2 rounded-lg outline-none"
                {...register('phone')}
              />
              {errors.phone && (
                <p className="text-sm text-red-500">
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col space-y-2 flex-1">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              type="text"
              placeholder="Enter the topic of your message"
              className="w-full border border-brandGray p-2 rounded-lg outline-none"
              {...register('subject')}
            />
            {errors.subject && (
              <p className="text-sm text-red-500">
                {errors.subject.message}
              </p>
            )}
          </div>
          <div className="flex flex-col space-y-2 flex-1">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              cols={30}
              rows={3}
              className="border border-brandGray p-2 rounded-lg outline-none"
              {...register('message')}
            ></textarea>
            {errors.message && (
              <p className="text-sm text-red-500">
                {errors.message.message}
              </p>
            )}
          </div>
          <div className="flex flex-col space-y-2 flex-1">
            <label htmlFor="contactMethod">Preferred Contact Method</label>
            <select
              id="contactMethod"
              className="bg-brandGray text-black p-3  h-10 rounded-lg outline-none"
              defaultValue=""
              {...register('contactMethod')}
            >
              <option value="" disabled>
                Select a contact method
              </option>
              <option value="email">Email</option>
              <option value="phone">Phone Number</option>
            </select>
            {errors.contactMethod && (
              <p className="text-sm text-red-500">
                {errors.contactMethod.message}
              </p>
            )}
          </div>
          <div className="">
            <button type="submit" className="text-black bg-brandYellow px-6 py-2 text-lg rounded-lg hover:opacity-80">
              Submit Form
            </button>
          </div>
        </form>
      </div>
      <div className="relative w-full hidden lg:block lg:w-1/2 min-h-100 lg:h-225 overflow-hidden">
        <Image src={formImage} alt="" fill className="object-cover" />
      </div>
    </section>
  );
};

export default ContactForm;
