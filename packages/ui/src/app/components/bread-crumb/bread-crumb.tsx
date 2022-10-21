import { Breadcrumbs, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { capitalizeFirstLetter } from '../../utils/string-utils';

/* eslint-disable-next-line */
export interface BreadCrumbProps {}

export function BreadCrumb(props: BreadCrumbProps) {
  const location = useLocation();
  const splittedLocations = location.pathname
    .split('/')
    .filter((p) => p.length > 0);
  if (splittedLocations.length === 0) splittedLocations.push('home');
  return (
    <Breadcrumbs aria-label="breadcrumb">
      {splittedLocations.map((loc) => (
        <Typography>{capitalizeFirstLetter(loc)}</Typography>
      ))}
    </Breadcrumbs>
  );
}

export default BreadCrumb;
