export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
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
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'sanity-nuxt-events-studio-n3kkcjsk',
                  apiId: 'dd4c7e19-3566-4cba-8527-3c005973bbd5'
                },
                {
                  buildHookId: '5ffe8c21dc099c8e8450585f',
                  title: 'Events Website',
                  name: 'sanity-nuxt-events-web-1f7mbh4z',
                  apiId: '5380cce5-d060-4f8a-b745-a04c3de9d1d7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ascodelab/sanity-nuxt-events',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nuxt-events-web-1f7mbh4z.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
