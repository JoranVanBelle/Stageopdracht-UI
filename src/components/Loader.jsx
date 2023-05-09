export default function Loader({ loading }) {
  if (loading) {
    return (
      <>
        <p className="font-face-cymo">Loading...</p>
      </>
    );
  }

  return null;
}