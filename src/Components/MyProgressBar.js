import ProgressBar from 'react-bootstrap/ProgressBar';

function MyProgressBar({p}) {
  return (
    <div>
      <ProgressBar variant="success" now={p} />
    </div>
  );
}

export default MyProgressBar;