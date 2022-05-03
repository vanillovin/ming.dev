import Container from 'components/Container';
import Title from 'components/Title';
import metadata from 'data/metadata';

function Aboutpage() {
  const customMeta = {
    title: `About - ${metadata.meta.title}`,
  };
  return (
    <Container customMeta={customMeta}>
      <Title title="About" description="저를 소개합니다" />
      <div>about</div>
    </Container>
  );
}

export default Aboutpage;
