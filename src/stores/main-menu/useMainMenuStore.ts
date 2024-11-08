import { defineStore } from 'pinia';
import { IEssentialLinkProps } from 'components/EssentialLink.vue';
import unitsDataList from 'src/mock/units';
import { IUnit } from 'src/interfaces/units';

export const useMainMenuStore = defineStore('main-menu', {
  state: () => ({
    sortedUnits: [] as IUnit[], // Sorted unit data stored once
  }),

  actions: {
    // Initialize sorted units once
    initializeSortedUnits() {
      if (this.sortedUnits.length === 0) {
        this.sortedUnits = [...unitsDataList].sort((a, b) => {
          const numA = parseInt(a.id.replace(/[^\d]/g, ''));
          const numB = parseInt(b.id.replace(/[^\d]/g, ''));
          return numA - numB;
        });
      }
    },

    // Retrieve a specific unit by ID
    findUnitById(unitId: string): IUnit | undefined {
      return this.sortedUnits.find((unit) => unit.id === unitId);
    },

    // Get a range of units between startId and endId
    getUnitsInRange(startId: string, endId: string): IUnit[] {
      this.initializeSortedUnits(); // Ensure units are sorted on first access

      const startIndex = this.sortedUnits.findIndex(
        (unit) => unit.id === startId
      );
      const endIndex = this.sortedUnits.findIndex((unit) => unit.id === endId);

      if (startIndex === -1 || endIndex === -1) {
        console.error(
          `Invalid unit indices. Start ID: ${startId}, End ID: ${endId}`
        );
        return [];
      }

      const [rangeStart, rangeEnd] =
        startIndex < endIndex ? [startIndex, endIndex] : [endIndex, startIndex];
      return this.sortedUnits.slice(rangeStart, rangeEnd + 1);
    },

    // Transform a unit to the IEssentialLinkProps format
    transformUnitToLinkProps(unit: IUnit): IEssentialLinkProps {
      return {
        title: unit.title,
        icon: unit.icon || '',
        link: unit.link,
        caption: unit.caption || '',
      };
    },

    // Main function to get menu items within a range
    getItemMenu(startId: string, endId: string): IEssentialLinkProps[] {
      return this.getUnitsInRange(startId, endId).map((unit) =>
        this.transformUnitToLinkProps(unit)
      );
    },

    // Main function to get menu all items
    getItemsMenu(): IEssentialLinkProps[] {
      return this.sortedUnits.map((unit) =>
        this.transformUnitToLinkProps(unit)
      );
    },
  },
});
