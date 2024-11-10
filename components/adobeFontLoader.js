"use client";
import { useEffect } from "react";

const AdobeFontLoader = () => {
	useEffect(() => {
		((d) => {
			const config = {
				kitId: `${process.env.NEXT_PUBLIC_ADOBE_FONTS_KIT_ID}`,
				scriptTimeout: 3000,
				async: true,
			};
			const h = d.documentElement;
			const t = setTimeout(() => {
				h.className = `${h.className.replace(
					/\bwf-loading\b/g,
					"",
				)} wf-inactive`;
			}, config.scriptTimeout);
			const tk = d.createElement("script");

			h.className += "wf-loading";
			tk.src = `https://use.typekit.net/${config.kitId}.js`;
			tk.async = true;
			tk.onload = () => {
				clearTimeout(t);
				try {
					window.Typekit.load(config);
				} catch (e) {}
			};
			tk.onerror = () => {
				clearTimeout(t);
			};

			const s = d.getElementsByTagName("script")[0];
			s.parentNode?.insertBefore(tk, s);
		})(document);
	}, []);

	return null;
};

export default AdobeFontLoader;