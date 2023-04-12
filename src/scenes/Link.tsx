import AnchorLink from 'react-anchor-link-smooth-scroll';
import { SelectedPage } from '@/shared/types'

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  title?:string
};

const Link = ({ page, selectedPage, setSelectedPage,title }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, '') as SelectedPage;
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? 'text-primary-500' : ''
      } transition duration-500 hover:text-primary-300 font-bold`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {title?title:page}
    </AnchorLink>
  );
};

export default Link;
