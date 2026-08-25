const fs = require('fs');
let text = fs.readFileSync('src/components/Admin/AdminDashboard.tsx', 'utf8');

// 1. Revert all mainDynamicPages to dynamicPages (clean slate)
text = text.replace(/mainDynamicPages/g, 'dynamicPages');

// 2. Insert mainDynamicPages definition at the right place
const target1 = 'const sidebarNav = [';
text = text.replace(target1, 'const mainDynamicPages = dynamicPages.filter(dp => !dp.slug?.includes(\'/\'));\n\n  const sidebarNav = [');

// 3. Update sidebar to use mainDynamicPages
const target2 = '...dynamicPages.map(dp => ({';
text = text.replace(target2, '...mainDynamicPages.map(dp => ({');

// 4. Update top header title logic to use mainDynamicPages
const target3 = '(dynamicPages.find(p => String(p.id) === activeMenu.replace(\'page_\', \'\'))?.title';
text = text.replace(target3, '(mainDynamicPages.find(p => String(p.id) === activeMenu.replace(\'page_\', \'\'))?.title');

// 5. Update components to receive mainDynamicPages as prop
text = text.replace('<DashboardStats siteContent={siteContent} dynamicPages={dynamicPages} />', '<DashboardStats siteContent={siteContent} dynamicPages={mainDynamicPages} />');
text = text.replace('<DynamicPagesManager dynamicPages={dynamicPages} onRefresh={onRefreshPages} />', '<DynamicPagesManager dynamicPages={mainDynamicPages} onRefresh={onRefreshPages} />');
text = text.replace('<SitemapPanel dynamicPages={dynamicPages} />', '<SitemapPanel dynamicPages={mainDynamicPages} />');
text = text.replace(/<DynamicPageEditor\s*pageId=\{activeMenu\.replace\('page_', ''\)\}\s*dynamicPages=\{dynamicPages\}/, '<DynamicPageEditor\n                pageId={activeMenu.replace(\'page_\', \'\')}\n                dynamicPages={mainDynamicPages}');

fs.writeFileSync('src/components/Admin/AdminDashboard.tsx', text, 'utf8');
