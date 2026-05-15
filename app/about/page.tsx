import React from 'react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white pt-22">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-safari-brown mb-8 text-center">About FurahaYao Safaris</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 mb-6">
            Furahayao Safaris is one of the best licensed Tanzania adventure safari agency & tour operators, offering all types of safari packages recommended by travel experts. We are committed to providing the best experiences in Tanzania, including lifetime safaris, wildebeest migration, Zanzibar holidaying, Kilimanjaro climbing, and Mount Meru trekking.
          </p>

          <p className="text-gray-700 mb-6">
            With decades of experience in planning tours and safaris in Tanzania, meet our local team of expert planners and guides. With on-the-ground insight about Tanzania National Parks, they can guide you to the best locations for epic sightseeing of the vast wildlife.
          </p>

          <p className="text-gray-700 mb-6">
            Our guides are professional and personable, always keeping safety a priority. Let us plan your next travel arrangements to see the vast wildlife of the legendary Serengeti, the historic and natural site of Ngorongoro Crater, climb towards Africa's highest peak at Mount Kilimanjaro, and more.
          </p>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/contact"
            className="inline-block bg-safari-brown text-white px-8 py-3 rounded-full font-bold text-lg hover:opacity-90 transition-opacity"
          >
            Plan Your Adventure
          </a>
        </div>
      </div>
    </main>
  );
}