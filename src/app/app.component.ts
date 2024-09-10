import { CommonModule } from '@angular/common';
import { Component, } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// interface TreeNode {
//   id: string;
//   children: TreeNode[];
// }

interface TreeNode {
  id: number;
  label: string;
  node: TreeNode[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  protected funcionarios: TreeNode  = {
    id: 1,
    label: 'Chefe',
    node: [{
      id: 2,
      label: 'Diretor financeiro',
      node: [
        {
          id: 4,
          label: 'Gerente',
          node: [],
        },
        {
          id: 5,
          label: 'Contador',
          node: [
            {
              id: 11,
              label: 'Teste',
              node: [],
            },
          ],
        },
      ],
    },
    {
      id: 3,
      label: 'Diretor técnico',
      node: [
        {
          id: 6,
          label: 'Tech Lead',
          node: [
            {
              id: 5,
              label: 'Dev Senior',
              node: [
                {
                  id: 6,
                  label: 'Dev Pleno',
                  node: [],
                },
                {
                  id: 8,
                  label: 'Dev Pleno',
                  node: [],
                },
              ],
            }
          ],
        }
      ],
    }]
  };
}



