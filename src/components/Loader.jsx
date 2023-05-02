export default function Loader({ loading }) {
  if (loading) {
    return (
      <>
        <p>Loading...</p>
      </>
    );
  }

  return null;
}