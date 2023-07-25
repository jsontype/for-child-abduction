/* eslint-disable no-underscore-dangle */
import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

type IBlogUrl = {
  slug: string;
};

export const getStaticPaths: GetStaticPaths<IBlogUrl> = async () => {
  return {
    paths: [...Array(10)].map((_, index) => ({
      params: { slug: `blog-${index}` },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<IBlogUrl, IBlogUrl> = async ({
  params,
}) => {
  return {
    props: {
      slug: params!.slug,
    },
  };
};

const Blog = async (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Main meta={<Meta title={props.slug} description="Lorem ipsum" />}>
      <h1 className="capitalize">{props.slug}</h1>
    </Main>
  );
};

export default Blog;
