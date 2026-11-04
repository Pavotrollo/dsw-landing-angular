import { Routes } from '@angular/router';
import { HomeScreen } from './screens/home-screen/home-screen';
import { PerfilScreen } from './screens/perfil-screen/perfil-screen';
import { DocumentacionScreen } from './screens/documentacion-screen/documentacion-screen';

/**
 * Configuración de rutas principales de la aplicación:
 * - Ruta por defecto: redirige a '/home'
 * - Rutas de componentes: Home, Perfil y Documentación
 * - Ruta comodín (**): redirige cualquier URL no reconocida a '/home'
 */
export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeScreen },
  { path: 'perfil', component: PerfilScreen },
  { path: 'documentacion', component: DocumentacionScreen },
  { path: '**', redirectTo: 'home' }
];
