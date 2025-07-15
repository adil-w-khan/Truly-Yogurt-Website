import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

// Contact Section Component
const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">Visit us or get in touch</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-amber-400 p-3 rounded-full">
                <MapPin className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Address</h3>
                <p className="text-gray-600">38 Easton Ave, New Brunswick, NJ 08901</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-amber-400 p-3 rounded-full">
                <Phone className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-gray-600">(732) 543-2555</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-amber-400 p-3 rounded-full">
                <Mail className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">trulyyogurt@trulyyogurtnb.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-amber-400 p-3 rounded-full">
                <Clock className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Business Hours</h3>
                <div className="text-gray-600 space-y-1">
                  <p>Sunday - Wednesday: 11:00 AM - 11:00 PM</p>
                  <p>Thursday - Saturday: 11:00 AM - 12:00 AM</p>
                  
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="rounded-lg overflow-hidden h-96 shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.2456404376025!2d-74.44623812425493!3d40.49785055201683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3c645b0bcde83%3A0x91f6d8aa749f22fa!2s38%20Easton%20Ave%2C%20New%20Brunswick%2C%20NJ%2008901!5e0!3m2!1sen!2sus!4v1720727385612!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Truly Yogurt Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
