import React, { useEffect } from 'react';

    const Ad = () => {
      useEffect(() => {
        if (typeof window !== 'undefined') {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
      }, []);

      return (
        <ins
          className="adsbygoogle"
          style={{ display: 'block', width: 728, height: 90 }}
          data-ad-client="ca-pub-9910230582193405"
          data-ad-slot="5928912620"
          data-ad-format="auto"
          data-full-width-responsive="true"
          data-adtest="on"

        />
      );
    };

    export default Ad;