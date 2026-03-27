import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Methodology',
      items: [
        'methodology/scope-and-limits',
        'methodology/inputs-and-outputs',
        'methodology/principles',
        'methodology/definitions',
        'methodology/lifecycle',
        'methodology/architecture',
        'methodology/gap-ledger-schema',
        'methodology/execution-workflow',
        'methodology/multi-agent-model',
        'methodology/status-and-ledger-rules',
        'methodology/agent-rules',
        'methodology/verification-rules',
        'methodology/release-policy',
        'methodology/risks-and-pressure-tests',
      ],
    },
    'appendix/templates',
  ],
};

export default sidebars;
