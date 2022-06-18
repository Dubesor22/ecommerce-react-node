export default function Btnicon({ src, className, href, span, alternative }) {
  return (
    <>
      <div class={className}>
        <a href={href} id="essenceCartBtn">
          <img src={src} alt={alternative} /> <span>{span}</span>
        </a>
      </div>
    </>
  );
}
