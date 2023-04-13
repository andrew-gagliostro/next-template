import className from 'classnames';
import { useRouter } from 'next/router';

type IVerticalFeatureRowProps = {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  reverse?: boolean;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    'mt-20',
    'flex',
    'flex-wrap',
    'items-center',
    {
      'flex-row-reverse': props.reverse,
    }
  );

  const router = useRouter();

  return (
    <div>
      {(props.image && props.imageAlt) && (
        <div className={verticalFeatureClass}>
          <div className="w-full text-center sm:px-6">
            <h3 style={{ fontSize: 2 + 'em' }} className="text-purple-800 font-semibold">{props.title}</h3>
            <div className="max-w-screen-lg mx-auto pb-auto pt-auto flex">
              <img className="object-scale-down h-40 w-full" src={`${router.basePath}${props.image}`} alt={props.imageAlt} />
            </div>
            <div className="mt-6 text-xl text-purple-700 font-semibold leading-9">{props.description}</div>
          </div>
        </div>
      )}
      {(!props.image && !props.imageAlt) && (
        <div className={verticalFeatureClass}>
          <div className="w-full  text-center sm:px-6">
            <h3 className="text-3xl text-purple-800 font-semibold">{props.title}</h3>
            <div className="mt-6 text-xl text-purple-600 font-semibold leading-9">{props.description}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export { VerticalFeatureRow };
