export interface PortfolioTitleType {
  gern: string
  name: string
  activetab: boolean[]
}

export interface ProjectDataType {
  title: string
  projectName: string
  pic: string
  githubLink: string
  viewOnline: string
}

export interface PortfolioDataType {
  all: ProjectDataType[]
  app: ProjectDataType[]
  templates: [
    {
      react: ProjectDataType[]
      vanillaJS: ProjectDataType[]
    },
  ]
  games: ProjectDataType[]
  graphicDesign: ProjectDataType[]
}
