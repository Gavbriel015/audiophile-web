export default function SummaryItem({title, price, className="", textColor} : {title: string, price: number, className: string, textColor: string }) {
  return (
    <>
      <div className={`flex justify-between ${className}`}>
        <p className="text-gray-400 uppercase">{title}</p>
        <span className={`font-semibold text-lg ${textColor}`}>${price}</span>
      </div>
    </>
  );
}
