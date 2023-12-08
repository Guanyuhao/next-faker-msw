import { LANG_LIST } from '@/config/constant';

const langPage = ({ params }: { params: { LANG: string } }) => {
  return <>langPage {params.LANG} {LANG_LIST.find((lang) => lang.key === params.LANG)?.value}</>;
};

export default langPage;