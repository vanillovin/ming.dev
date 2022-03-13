import Container from 'components/Container';
import metadata from 'data/metadata';

function Aboutpage() {
  const customMeta = {
    title: `About - ${metadata.meta.title}`,
  };
  return (
    <Container customMeta={customMeta}>
      <div>about</div>
    </Container>
  )
}

export default Aboutpage;