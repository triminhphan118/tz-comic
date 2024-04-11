import { QueryClient } from '@tanstack/query-core';
import { cache } from 'react';

export const vi = cache(() => new QueryClient());
