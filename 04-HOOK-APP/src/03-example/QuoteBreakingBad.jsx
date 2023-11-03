export const QuoteBreakingBad = ({ author, quote }) => {
  return (
    <blockquote className="blockquote text-light text-end">
      <p className="mb-3">"{quote}"</p>
      <footer className="blockquote-footer">{author}</footer>
    </blockquote>
  );
};
