export default function QuoteSection() {
  return (
    <div className="scroll-trigger opacity-0 translate-y-10 max-w-2xl mx-auto text-center py-8">
      <div className="relative">
        {/* Decorative quotes */}
        <span className="font-playfair text-[80px] text-secondary/10 absolute -top-10 -left-4 leading-none select-none">
          "
        </span>
        <span className="font-playfair text-[80px] text-secondary/10 absolute -bottom-16 -right-4 leading-none select-none">
          "
        </span>
        
        <p className="font-inter text-[16px] md:text-[18px] leading-[1.8] text-on-surface-variant italic px-6 md:px-12">
          "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang."
        </p>
        <p className="font-inter text-[14px] text-secondary mt-4 font-semibold tracking-wider">
          — QS. Ar-Rum: 21
        </p>
      </div>
    </div>
  );
}
