'use client';

import { TitleGradient } from '@/components/shared/title-gradient';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function ContactSection() {
  return (
    <section id="contact" className="font-sans py-[64px] lg:my-[128px]">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="bg-white border border-gray-200 rounded-3xl p-8 lg:p-16 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Left Side - Form */}
            <div className="flex flex-col">
              <div className="mb-8">
                <TitleGradient as="h2" className="text-3xl lg:text-4xl pb-2 mb-4">
                  Hubungi Tim Kami
                </TitleGradient>
                <p className="text-[18px] lg:text-[20px] font-medium text-gray-400 leading-relaxed">
                  Siap memulai proyek atau punya pertanyaan Kami terbuka untuk berdiskusi dan
                  membantu menemukan solusi digital yang tepat untuk kebutuhan kamu
                </p>
              </div>

              <form className="space-y-6 flex-1 flex flex-col">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-black font-semibold">
                      Nama
                    </label>
                    <Input
                      id="name"
                      placeholder="Nama"
                      className="h-12 border-gray-300 focus-visible:ring-[#00AAFF] rounded-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-black font-semibold">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Email"
                      className="h-12 border-gray-300 focus-visible:ring-[#00AAFF] rounded-lg"
                    />
                  </div>
                </div>

                <div className="space-y-2 flex-grow">
                  <label htmlFor="message" className="text-black font-semibold">
                    Kirim Pesan
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Kirim Pesan"
                    className="min-h-[180px] border-gray-300 focus-visible:ring-[#00AAFF] rounded-lg resize-none"
                  />
                </div>

                <div>
                  {/* BACKEND NOTE: Form ini nantinya akan dihubungkan ke API (misal: Resend/Nodemailer) atau database Supabase */}
                  <Button className="bg-black text-white hover:bg-gray-800 rounded-md px-10 py-6 text-base font-semibold transition-all duration-300 hover:scale-105">
                    Kirim
                  </Button>
                </div>
              </form>
            </div>

            {/* Right Side - Direct Contact */}
            <div className="flex flex-col justify-center space-y-10 lg:pl-12">
              {/* Chat directly */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-black">Chat langsung tim kami</h3>
                <p className="text-gray-500 text-sm">
                  Kirim pesan secara langsung dengan salah sau tim kami
                </p>
                <div className="space-y-3">
                  <a href="#" className="flex items-center gap-3 group">
                    <i className="ri-whatsapp-fill text-2xl text-black group-hover:text-[#00AAFF] transition-colors"></i>
                    <span className="text-black font-medium border-b border-black pb-0.5 group-hover:text-[#00AAFF] group-hover:border-[#00AAFF] transition-colors">
                      Start a live chat
                    </span>
                  </a>
                  <a href="#" className="flex items-center gap-3 group">
                    <i className="ri-send-plane-fill text-2xl text-black group-hover:text-[#00AAFF] transition-colors"></i>
                    <span className="text-black font-medium border-b border-black pb-0.5 group-hover:text-[#00AAFF] group-hover:border-[#00AAFF] transition-colors">
                      Shoot us an email
                    </span>
                  </a>
                  <a href="#" className="flex items-center gap-3 group">
                    <i className="ri-instagram-fill text-2xl text-black group-hover:text-[#00AAFF] transition-colors"></i>
                    <span className="text-black font-medium border-b border-black pb-0.5 group-hover:text-[#00AAFF] group-hover:border-[#00AAFF] transition-colors">
                      Message us on Instagram
                    </span>
                  </a>
                </div>
              </div>

              {/* Call us */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-black">Hubungi kami</h3>
                <p className="text-gray-500 text-sm">
                  Hubungi melaui telepon dengan tim kami dari 7.00 AM - 8.00 PM
                </p>
                <a href="tel:+62080000000" className="flex items-center gap-3 group">
                  <i className="ri-phone-fill text-2xl text-black group-hover:text-[#00AAFF] transition-colors"></i>
                  <span className="text-black font-medium border-b border-black pb-0.5 group-hover:text-[#00AAFF] group-hover:border-[#00AAFF] transition-colors">
                    +62(08)0000000
                  </span>
                </a>
              </div>

              {/* Visit us */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-black">Datangi kami</h3>
                <p className="text-gray-500 text-sm">Hubungi kami secara langsung</p>
                <div className="flex items-center gap-3">
                  <i className="ri-map-pin-2-fill text-2xl text-black group-hover:text-[#00AAFF] transition-colors"></i>
                  <span className="text-black font-medium border-b border-black pb-0.5">
                    Sumedang, Jawa Barat, Indonesia
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
