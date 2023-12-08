import { LANG_LIST } from '@/config/constant';
export const generateStaticParams = async () => {
    return LANG_LIST.map((lang) => ({
        LANG: lang.key
    }))
}

const AppMultiLanguageLayout = (props: { children: any; }) => {
    return props.children;
};

export default AppMultiLanguageLayout;
