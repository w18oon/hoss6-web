import React from 'react';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Breadcrumb = ({ links }) => {
  return (
    <Box>
      <Breadcrumbs aria-label="breadcrumb">
        {links.map((link, index) => (
          <span key={index}>
            {link.isActive ? (
              <Typography color="text.primary">{link.title}</Typography>
            ) : (
              <Link
                href={link.href}
                sx={{
                  fontWeight: 700,
                  textDecoration: 'none',
                }}
              >
                {link.title}
              </Link>
            )}
          </span>
        ))}
      </Breadcrumbs>
    </Box>
  );
};

export default Breadcrumb;
