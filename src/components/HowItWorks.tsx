
export const HowItWorks = () => (
  <section className="container mx-auto px-4 py-14">
    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">How It Works</h2>
    <div className="grid md:grid-cols-4 gap-8">
      <div className="flex flex-col items-center">
        <img src="post_delivery.png" alt="post delivery" className="h-24 w-24 rounded-full object-cover mb-4" />
        <span className="bg-green-600 text-white font-semibold rounded-full w-8 h-8 flex items-center justify-center mb-2">1</span>
        <div className="text-center text-sm font-medium">Post Delivery <br />Request</div>
      </div>
      <div className="flex flex-col items-center">
        <img src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg" alt="get matched" className="h-24 w-24 rounded-full object-cover mb-4" />
        <span className="bg-green-600 text-white font-semibold rounded-full w-8 h-8 flex items-center justify-center mb-2">2</span>
        <div className="text-center text-sm font-medium">Get Matched<br />with Movers</div>
      </div>
      <div className="flex flex-col items-center">
        <img src="delivery_track.jpg" alt="track" className="h-24 w-24 rounded-full object-cover mb-4" />
        <span className="bg-green-600 text-white font-semibold rounded-full w-8 h-8 flex items-center justify-center mb-2">3</span>
        <div className="text-center text-sm font-medium">Track<br />Delivery</div>
      </div>
      <div className="flex flex-col items-center">
        <img src="mpesa.png" alt="get paid" className="h-24 w-24 rounded-full object-cover mb-4" />
        <span className="bg-green-600 text-white font-semibold rounded-full w-8 h-8 flex items-center justify-center mb-2">4</span>
        <div className="text-center text-sm font-medium">Get Paid<br />Securely</div>
      </div>
    </div>
  </section>
);
