import Head from 'next/head';
import { Fragment } from 'react';
import dayjs from 'dayjs';
import Image from 'next/image';
import relativeTime from 'dayjs/plugin/relativeTime';
import useSWR from 'swr';

import { Sub } from '../types';
import PostCard from '../components/PostCard';
import Link from 'next/link';

dayjs.extend(relativeTime);

export default function Home() {
  const { data: posts } = useSWR('/posts');
  const { data: topSubs } = useSWR('/misc/top-subs');

  return (
    <Fragment>
      <Head>
        <title>readit: the front page of the internet</title>
      </Head>
      <div className='container flex pt-4'>
        {/* Posts feed */}
        <div className='w-160'>
          {posts?.map((post) => (
            <PostCard post={post} key={post.identifier} />
          ))}
        </div>
        <div className='ml-6 w-80'>
          <div className='bg-white rounded'>
            <div className='p-4 border-b-2'>
              <p className='font-semibold text-center text lg'>
                Top Communities
              </p>
            </div>
            <div>
              {topSubs?.map((sub: Sub) => (
                <div
                  key={sub.name}
                  className='flex items-center px-4 py-2 text-xs border-b'
                >
                  <div className='mr-2 overflow-hidden rounded-full cursor-pointer'>
                    <Link href={`/r/${sub.name}` }>
                      <Image
                        src={sub.imageUrl}
                        alt='sub'
                        width={(6 * 16) / 4}
                        height={(6 * 16) / 4}
                      />
                    </Link>
                  </div>
                  <Link href={`/r/${sub.name}`}>
                    <a className='font-bold hover:cursor-pointer'>
                      /r/{sub.name}
                    </a>
                  </Link>
                  <p className='ml-auto font-med'>{sub.postCount}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   try {
//     const res = await Axios.get('/posts')

//     return { props: { posts: res.data } }
//   } catch (err) {
//     return { props: { error: 'Something went wrong' } }
//   }
// }
