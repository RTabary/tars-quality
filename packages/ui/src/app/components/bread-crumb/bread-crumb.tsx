import { Breadcrumbs } from '@mui/material';
import Link from '@mui/material/Link';
import { useLocation } from 'react-router-dom';
import { capitalizeFirstLetter } from '../../utils/string-utils';

/* eslint-disable-next-line */
export interface BreadCrumbProps {}

export function BreadCrumb(props: BreadCrumbProps) {
  const location = useLocation();
  const splittedLocations = location.pathname
    .split('/')
    .filter((p) => p.length > 0);
  return (
    <Breadcrumbs aria-label="breadcrumb">
      {splittedLocations.map((loc) => (
        <Link underline="hover" color="inherit" href={loc} key={loc}>
          {capitalizeFirstLetter(loc)}
        </Link>
      ))}
    </Breadcrumbs>
  );
}

export default BreadCrumb;
