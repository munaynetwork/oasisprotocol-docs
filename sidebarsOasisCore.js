// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  oasisCore: [
    {
      type: 'doc',
      label: 'Introduction to Oasis Core',
      id: 'index',
    },
    {
      type: 'category',
      label: 'Development Setup',
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'Build Environment Setup and Building',
          link: {
            type: 'generated-index',
            title: 'Build Environment Setup and Building',
            slug: 'development-setup/build-environment-setup-and-building'
          },
          items: [
              'development-setup/prerequisites',
              'development-setup/building',
          ],
        },
        {
          type: 'category',
          label: 'Running Tests and Development Networks',
          link: {
            type: 'generated-index',
            title: 'Running Tests and Development Networks',
            slug: 'development-setup/running-tests-and-development-networks'
          },
          items: [
            'development-setup/running-tests',
            'development-setup/oasis-net-runner',
            'development-setup/single-validator-node-network',
            'development-setup/deploying-a-runtime',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'High-Level Components',
      collapsible: false,
      items: [
        {
          type: 'category',
          label: 'Consensus Layer',
          link: {
            type: 'doc',
            id: 'consensus/index',
          },
          items: [
            'consensus/transactions',
            {
              type: 'category',
              label: 'Services',
              link: {
                type: 'generated-index',
                title: 'Services',
                slug: 'consensus/services',
              },
              items: [
                'consensus/services/epochtime',
                'consensus/services/beacon',
                'consensus/services/staking',
                'consensus/services/registry',
                'consensus/services/scheduler',
                'consensus/services/governance',
                'consensus/services/roothash',
                'consensus/services/keymanager',
              ],
            },
            'consensus/genesis',
            'consensus/test-vectors',
          ],
        },
        {
          type: 'category',
          label: 'Runtime Layer',
          link: {
            type: 'doc',
            id: 'runtime/index',
          },
          items: [
            'runtime/runtime-host-protocol',
            'runtime/identifiers',
            'runtime/messages',
          ],
        },
        {
          type: 'category',
          label: 'Oasis Node',
          items: [
            'oasis-node/rpc',
            'oasis-node/metrics',
            {
              type: 'doc',
              id: 'oasis-node/cli',
              label: 'oasis-node CLI'
            }
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Common Functionality',
      collapsible: false,
      items: [
        'encoding',
        'crypto',
        {
          type: 'category',
          label: 'Protocols',
          items: [
            'authenticated-grpc',
          ],
        },
        'mkvs',
      ],
    },
    {
      type: 'category',
      label: 'Processes',
      collapsible: false,
      items: [
        'release-process',
        'versioning',
        {
          type: 'doc',
          id: 'SECURITY',
          label: 'Security',
        },
      ],
    },
  ],
};

module.exports = sidebars;
