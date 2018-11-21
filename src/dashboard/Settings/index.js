import React from 'react';
import { Layout } from 'antd';
import Header from '../../common/components/Header';

import SettingsLayout from './components/SettingsLayout';

/**
 * Render contacts panel component which have all the the components in relation
 * to contacts
 *
 * @function
 * @name Settings
 *
 * @version 0.1.0
 * @since 0.1.0
 */
export default function Settings() {
  return (
    <Layout>
      <Header title="Settings" />
      <SettingsLayout />
    </Layout>
  );
}
