import React from 'react';

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-white pt-22">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-safari-brown mb-8 text-center">FAQ</h1>
        <p className="text-lg text-gray-600 mb-12 text-center">All the answers to your questions</p>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-semibold text-safari-brown mb-4">What documents are needed to travel to Tanzania?</h2>
            <p className="text-gray-700">
              Travelers must generally present a valid passport and a visa is required. When obtaining this visa, be sure to apply on an official website: <a href="https://visa.immigration.go.tz" className="text-safari-brown underline" target="_blank" rel="noopener noreferrer">https://visa.immigration.go.tz</a>.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-safari-brown mb-4">What vaccines are recommended before traveling to Tanzania?</h2>
            <p className="text-gray-700">
              Vaccinations such as yellow fever and malaria prophylaxis are generally recommended. It is strongly advised to contact your healthcare professional for personalized advice at least one month before your departure.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-safari-brown mb-4">What is the best time to go on safari in Tanzania?</h2>
            <p className="text-gray-700 mb-4">
              Tanzania offers four distinct safari seasons:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Dry season (June-October):</strong> Sunny days, wildlife near waterholes, increased light.</li>
              <li><strong>Short rainy season (November-December):</strong> Occasional rains, green vegetation, birth of young animals.</li>
              <li><strong>Hot season (December-February):</strong> High temperatures, unique wildlife, lush landscape.</li>
              <li><strong>Main rainy season (March-May):</strong> Heavy rains, lush vegetation, less suitable for safaris.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-safari-brown mb-4">Is it possible to customize a safari itinerary or combine a safari with a stay in Zanzibar?</h2>
            <p className="text-gray-700">
              Yes, we offer customized itineraries. We offer luxury safaris as well as more standard safaris. Contact us to discuss your preferences and create the perfect trip tailored to your wishes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-safari-brown mb-4">What means of transport are used for safaris?</h2>
            <p className="text-gray-700">
              Safaris can be done by 4x4, on foot, or even by hot air balloon. The choice depends on the type of experience you are looking for.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-safari-brown mb-4">What is the cancellation policy in case of unexpected circumstances?</h2>
            <h3 className="text-xl font-medium text-safari-brown mb-4">Cancellation Policy</h3>
            <p className="text-gray-700 mb-4">
              Any cancellation by the client will incur the following charges once the reservation has been confirmed by payment of a deposit:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>More than 60 days before departure:</strong> 40% of the total safari price is due (deposit)</li>
              <li><strong>From 60 to 30 days before departure:</strong> 60% of the total safari price is due</li>
              <li><strong>Less than 30 days before departure:</strong> 100% of the total safari price is due</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Cancellation must be notified by email; the date of this email will be the date taken into account for the cancellation request.
            </p>
            <p className="text-gray-700">
              In the event of partial cancellation by participants, a revision of the price per person will be made and these additional costs will be added to the initial price.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-safari-brown mb-4">What cultural aspects need to be considered in Tanzania?</h2>
            <p className="text-gray-700">
              Tanzania has a rich and diverse culture. Respect local customs and be open to exploring and learning from local communities.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-safari-brown mb-4">Are there any specific precautions to take before and during the safari?</h2>
            <p className="text-gray-700">
              Dress appropriately for the season of your trip. Avoid noisy behavior and follow safety guidelines for a safe and unforgettable safari experience.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}