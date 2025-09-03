import StarRating from "./StarRating";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-950 text-center">
      <h2 className="section-title">What Clients Say</h2>

      {/* your static testimonials carousel here */}

      <div className="mt-12">
        <h3 className="text-xl font-semibold text-white mb-4">
          Rate My Work ⭐
        </h3>
        <StarRating />
      </div>
    </section>
  );
}