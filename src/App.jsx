import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import AppHeader from './components/layout/AppHeader';
import AppFooter from './components/layout/AppFooter';
import Tools from './pages/Tools';
import NotFound from './pages/NotFound';

const SITE_KEY = 'tools';

const draftTheme = {
  token: {
    colorPrimary: '#111827',
    colorBgBase: '#FFFFFF',
    colorTextBase: '#111827',
    colorBorder: '#E5E7EB',
    colorBorderSecondary: '#E5E7EB',
    colorBgContainer: '#FFFFFF',
    colorBgElevated: '#FFFFFF',
    colorBgLayout: '#FFFFFF',
    colorTextSecondary: '#374151',
    colorTextTertiary: '#6B7280',
    colorTextPlaceholder: '#9CA3AF',
    fontFamily: '"Lato", "Helvetica Neue", Arial, sans-serif',
    fontWeightStrong: 700,
    borderRadius: 4,
    borderRadiusLG: 4,
    borderRadiusSM: 4,
    borderRadiusXS: 4,
    boxShadow: 'none',
    boxShadowSecondary: 'none',
    lineWidth: 1,
    wireframe: false,
  },
  components: {
    Button: {
      colorPrimary: '#111827',
      colorPrimaryHover: '#374151',
      colorBgContainer: '#FFFFFF',
      colorText: '#111827',
      paddingContentHorizontal: 14,
    },
    Card: {
      colorBorderSecondary: '#E5E7EB',
      boxShadowTertiary: 'none',
    },
    Select: {
      colorBorder: '#E5E7EB',
      optionSelectedBg: '#F3F4F6',
    },
  },
};

export default function App() {
  return (
    <ConfigProvider theme={draftTheme}>
      <div className="app-shell">
        <AppHeader current={SITE_KEY} />
        <Routes>
          <Route path="/" element={<Tools />} />
          {/* anything else: Pages serves 404.html (a copy of index.html), so the router lands here */}
          <Route path="*" element={<NotFound current={SITE_KEY} />} />
        </Routes>
        <AppFooter />
      </div>
    </ConfigProvider>
  );
}
