/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const About = () => {
  const Today = '20210101';
  Today.replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3');
  console.log('Today: ', Today);

  const Today2 = '20210101';
  const today = `${Today2.substring(0, 4)}年 ${Today2.substring(4, 2)}月`;
  console.log('Today2: ', today);

  return (
    <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
        recusandae quidem. Quaerat molestiae blanditiis doloremque possimus
        labore voluptatibus distinctio recusandae autem esse explicabo molestias
        officia placeat, accusamus aut saepe.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione fuga
        recusandae quidem. Quaerat molestiae blanditiis doloremque possimus
        labore voluptatibus distinctio recusandae autem esse explicabo molestias
        officia placeat, accusamus aut saepe.
      </p>
    </Main>
  );
};
export default About;
