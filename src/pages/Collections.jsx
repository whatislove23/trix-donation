import CollectionsGrid from '../components/collections/CollectionsGrid';
import CollectionsHeroSlider from '../components/collections/CollectionsHeroSlider';
import OrganisationsSlider from '../components/collections/OrganisationsSlider';

export default function Collections() {
  return (
    <>
      <CollectionsHeroSlider />
      <div className='flex flex-col  gap-20 py-20 md:gap-28  md:py-28 lg:gap-32 lg:py-32 '>
        <CollectionsGrid />
        <OrganisationsSlider />
      </div>
    </>
  );
}
