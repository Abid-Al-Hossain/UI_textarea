"use client";

import React, { useMemo } from "react";
import { SectionCard } from "@/components/shared/layout/ui";
import TypographyControl from "@/components/shared/typography/TypographyControl";
import {
  SYSTEM_FONTS,
  GOOGLE_FONTS,
} from "@/components/shared/typography/fontConstants";
import { type TextareaSetter, type TextareaState } from "../types";

export default function TypographySection({
  state,
  setKey,
}: {
  state: TextareaState;
  setKey: TextareaSetter;
}) {
  const filteredSystemFonts = useMemo(
    () =>
      SYSTEM_FONTS.filter((font) =>
        font.label
          .toLowerCase()
          .includes(state.fontSearch?.toLowerCase() || ""),
      ),
    [state.fontSearch],
  );

  const filteredGoogleFonts = useMemo(
    () =>
      GOOGLE_FONTS.filter((font) =>
        font.toLowerCase().includes(state.fontSearch?.toLowerCase() || ""),
      ),
    [state.fontSearch],
  );

  return (
    <SectionCard
      title="Typography"
      subtitle="Font family, size, weight, and more."
    >
      <div className="space-y-4">
        <TypographyControl
          // Font Family
          fontBucket={state.fontBucket}
          setFontBucket={setKey("fontBucket")}
          fontSearch={state.fontSearch || ""}
          setFontSearch={setKey("fontSearch")}
          systemFonts={SYSTEM_FONTS}
          filteredSystemFonts={filteredSystemFonts}
          systemFontIdx={state.systemFontIdx}
          setSystemFontIdx={setKey("systemFontIdx")}
          googleFonts={GOOGLE_FONTS}
          filteredGoogleFonts={filteredGoogleFonts}
          googleFontFamily={state.googleFontFamily}
          setGoogleFontFamily={setKey("googleFontFamily")}
          // Font Size
          fontSize={state.fontSize}
          setFontSize={(v) => setKey("fontSize")(v)}
          fontSizeUnit={state.fontSizeUnit}
          setFontSizeUnit={setKey("fontSizeUnit")}
          fontSizeMin={10}
          fontSizeMax={64}
          // Weight
          fontWeight={state.fontWeight}
          setFontWeight={(v) =>
            setKey("fontWeight")(v as TextareaState["fontWeight"])
          }
          // Decoration
          fontStyle={state.fontStyle}
          setFontStyle={setKey("fontStyle")}
          textDecoration="none"
          setTextDecoration={() => {}}
          textTransform={state.textTransform}
          setTextTransform={setKey("textTransform")}
          // Spacing
          letterSpacing={state.letterSpacing}
          setLetterSpacing={(v) => setKey("letterSpacing")(v)}
          letterSpacingUnit={state.letterSpacingUnit}
          setLetterSpacingUnit={setKey("letterSpacingUnit")}
          lineHeight={state.lineHeight}
          setLineHeight={(v) => setKey("lineHeight")(v)}
        />
      </div>
    </SectionCard>
  );
}
