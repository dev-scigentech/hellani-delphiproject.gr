'use client';

import { useLanguage } from '@/contexts/language-context';
import { Building2, Users, Award, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function SupportersPage() {
  const { t } = useLanguage();

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100'>
      <div className='max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8'>
        {/* Header Section */}
        <div className='text-center mb-16'>
          <div className='inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6'>
            <Users className='w-8 h-8 text-blue-600' />
          </div>
          <h1 className='text-5xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'>
            {t('supportersTitle')}
          </h1>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
            {t('supportersContent')}
          </p>
        </div>

        {/* Main Content Card */}
        <div className='bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/30 overflow-hidden mb-12'>
          {/* Decorative Header */}
          <div className='bg-gradient-to-r from-blue-600 to-indigo-600 h-2'></div>

          <div className='p-12'>
            {/* Partnership Section */}
            {/* <div className='text-center mb-12'>
              <div className='inline-flex items-center justify-center w-12 h-12 bg-amber-100 rounded-full mb-4'>
                <Award className='w-6 h-6 text-amber-600' />
              </div>
              <h2 className='text-2xl font-semibold text-gray-900 mb-4'>
                Trusted Partners
              </h2>
              <p className='text-gray-600 max-w-2xl mx-auto'>
                We are proud to collaborate with leading organizations that
                share our vision and commitment to excellence.
              </p>
            </div> */}

            {/* Supporters Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
              {/* AstraZeneca Card */}
              <div className='group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1'>
                <div className='absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <Sparkles className='w-5 h-5 text-blue-500' />
                </div>
                <div className='flex items-center justify-center h-24 mb-4'>
                  <Image
                    width={180}
                    height={80}
                    src='/images/astrazeneca_on.png'
                    alt='AstraZeneca'
                    className='max-w-full h-auto object-contain filter hover:brightness-110 transition-all duration-300'
                  />
                </div>
              </div>

              {/* Merck Card */}
              <div className='group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1'>
                <div className='absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <Sparkles className='w-5 h-5 text-blue-500' />
                </div>
                <div className='flex items-center justify-center h-24 mb-4'>
                  <Image
                    width={180}
                    height={80}
                    src='/images/merck_on.png'
                    alt='Merck'
                    className='max-w-full h-auto object-contain filter hover:brightness-110 transition-all duration-300'
                  />
                </div>
              </div>
            </div>

            {/* Partnership Benefits */}
            {/* <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              <div className='text-center p-6 bg-blue-50 rounded-xl'>
                <div className='inline-flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full mb-3'>
                  <Building2 className='w-5 h-5 text-blue-600' />
                </div>
                <h4 className='font-semibold text-gray-900 mb-2'>Innovation</h4>
                <p className='text-sm text-gray-600'>
                  Driving breakthrough solutions together
                </p>
              </div>

              <div className='text-center p-6 bg-indigo-50 rounded-xl'>
                <div className='inline-flex items-center justify-center w-10 h-10 bg-indigo-100 rounded-full mb-3'>
                  <Users className='w-5 h-5 text-indigo-600' />
                </div>
                <h4 className='font-semibold text-gray-900 mb-2'>
                  Collaboration
                </h4>
                <p className='text-sm text-gray-600'>
                  Building stronger partnerships
                </p>
              </div>

              <div className='text-center p-6 bg-purple-50 rounded-xl'>
                <div className='inline-flex items-center justify-center w-10 h-10 bg-purple-100 rounded-full mb-3'>
                  <Award className='w-5 h-5 text-purple-600' />
                </div>
                <h4 className='font-semibold text-gray-900 mb-2'>Excellence</h4>
                <p className='text-sm text-gray-600'>
                  Committed to the highest standards
                </p>
              </div>
            </div> */}
          </div>
        </div>

        {/* Call to Action */}
        {/* <div className='text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white'>
          <h3 className='text-2xl font-bold mb-4'>
            Interested in Partnership?
          </h3>
          <p className='text-blue-100 mb-6 max-w-2xl mx-auto'>
            Join our network of trusted partners and be part of our mission to
            create meaningful impact.
          </p>
          <button className='bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl'>
            Get in Touch
          </button>
        </div> */}
      </div>
    </div>
  );
}
