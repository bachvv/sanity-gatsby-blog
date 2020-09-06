export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f54655a1e2b2f4795b67822',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-3v16w74v',
                  apiId: 'dd93a7c3-4d51-4f15-8290-2b0b5fddc981'
                },
                {
                  buildHookId: '5f54655a080cf0ed3b62f2b5',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-u8dxy667',
                  apiId: '5e42f2d5-8d9a-4f0e-b111-80d0f49b3a10'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bachvv/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-u8dxy667.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
