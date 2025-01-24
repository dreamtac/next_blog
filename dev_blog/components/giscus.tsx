'use client';

import Giscus from '@giscus/react';

export default function GiscusComponent() {
    return (
        <div className="mt-8">
            <Giscus
                // src="https://giscus.app/client.js"
                repo="dreamtac/next_blog"
                repoId="R_kgDONeJriA"
                // data-repo-id=
                category="General"
                categoryId="DIC_kwDONeJriM4CmTYD"
                mapping="pathname"
                data-strict="0"
                data-reactions-enabled="1"
                data-emit-metadata="0"
                data-input-position="bottom"
                data-theme="preferred_color_scheme"
                data-lang="ko"
                // crossOrigin="anonymous"
                // async
            />
        </div>
    );
}
