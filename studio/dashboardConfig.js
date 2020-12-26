export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5fe7b046b6d01be0966fa854',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-a7gexx8g',
                  apiId: '385c6f47-dec6-4bca-85cc-88403eecc790'
                },
                {
                  buildHookId: '5fe7b04669f90db0ed7cd629',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-y1gpxhce',
                  apiId: 'ae0d64c2-436a-4a83-8915-c455bb5150f6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/samTorres/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-y1gpxhce.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
