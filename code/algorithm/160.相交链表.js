/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let cur1 = headA;
  let cur2 = headB;
  let len1 = 0;
  let len2 = 0;
  // 获取链表A的长度
  while (cur1) {
    len1++;
    cur1 = cur1.next;
  }
  // 获取链表B的长度
  while (cur2) {
    len2++;
    cur2 = cur2.next;
  }
  // 恢复头指针
  cur1 = headA;
  cur2 = headB;
  // 保证len1永远是最长的链表，len2永远是最短的链表
  if (len1 < len2) {
    [len1, len2] = [len2, len1][(cur1, cur2)] = [cur2, cur1];
  }
  let i = len1 - len2;
  // 移动cur1到 倒数len2长度的位置
  while (i-- > 0) {
    cur1 = cur1.next;
  }
  // 如果cur1 等于 cur2就停止循环
  while (cur1 && cur1 !== cur2) {
    cur1 = cur1.next;
    cur2 = cur2.next;
  }
  return cur1;
};
// @lc code=end
