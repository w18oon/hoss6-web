import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

import { NavItem } from './components';

const Topbar = ({ onSidebarOpen, pages, colorInvert = false }) => {
  const theme = useTheme();
  const { mode } = theme.palette;
  const {
    landings: landingPages,
    secondary: secondaryPages,
    company: companyPages,
    account: accountPages,
    portfolio: portfolioPages,
    blog: blogPages,
  } = pages;

  const menuItems = [
    {
      href: '/',
      title: 'หน้าแรก',
    },
    {
      href: '/about',
      title: 'เกี่ยวกับเรา',
    },
    {
      href: '/how',
      title: 'ใช้ยังไง',
    },
    {
      href: '/post',
      title: 'โพสต์งาน',
    },
    // {
    //   href: '/faq',
    //   title: 'คำถามที่พบบ่อย',
    // },
    {
      href: '/help',
      title: 'ต้องการความช่วยเหลือ',
    },
    // {
    //   href: '/contact',
    //   title: 'ติดต่อเรา',
    // },
    {
      href: '/signin-simple',
      title: 'เข้าสู่ระบบ',
    },
    {
      href: '/me',
      title: 'โปรไฟล์ของฉัน',
    },
  ];

  return (
    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} width={1}>
      <Box display={'flex'} href="/" title="theFront" width={{ xs: 100, md: 120 }}>
        {/* <Box
          component={'img'}
          src={
            mode === 'light' && !colorInvert
              ? 'https://assets.maccarianagency.com/the-front/logos/logo.svg'
              : 'https://assets.maccarianagency.com/the-front/logos/logo-negative.svg'
          }
          height={1}
          width={1}
        /> */}
        <Typography color={colorInvert ? 'common.white' : 'text.primary'}>{'โลโก้'}</Typography>
      </Box>
      <Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
        {/* <Box>
          <NavItem
            title={'Landings'}
            id={'landing-pages'}
            items={landingPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Company'}
            id={'company-pages'}
            items={companyPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Account'}
            id={'account-pages'}
            items={accountPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Pages'}
            id={'secondary-pages'}
            items={secondaryPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Blog'}
            id={'blog-pages'}
            items={blogPages}
            colorInvert={colorInvert}
          />
        </Box>
        <Box marginLeft={4}>
          <NavItem
            title={'Portfolio'}
            id={'portfolio-pages'}
            items={portfolioPages}
            colorInvert={colorInvert}
          />
        </Box> */}
        {menuItems.map((menuItem) => (
          <Box marginLeft={4} key={menuItem.title}>
            <Link href={menuItem.href} passHref>
              <Box
                display={'flex'}
                alignItems={'center'}
                aria-describedby={'test'}
                sx={{ cursor: 'pointer' }}
              >
                <Typography color={colorInvert ? 'common.white' : 'text.primary'}>
                  {menuItem.title}
                </Typography>
              </Box>
            </Link>
          </Box>
        ))}

        <Box marginLeft={4}>
          <Link href={'/signup-simple'}>
            <Button variant="contained" color="primary" component="a" size="large">
              สมัครสมาชิก
            </Button>
          </Link>
        </Box>
      </Box>
      <Box sx={{ display: { xs: 'block', md: 'none' } }} alignItems={'center'}>
        <Button
          onClick={() => onSidebarOpen()}
          aria-label="Menu"
          variant={'outlined'}
          sx={{
            borderRadius: 2,
            minWidth: 'auto',
            padding: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
        >
          <MenuIcon />
        </Button>
      </Box>
    </Box>
  );
};

Topbar.propTypes = {
  onSidebarOpen: PropTypes.func,
  pages: PropTypes.object,
  colorInvert: PropTypes.bool,
};

export default Topbar;
